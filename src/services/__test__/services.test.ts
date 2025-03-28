import { WeatherApi } from "../api.service";
import { api } from "../api";
import apiConfig from "../api.config";

jest.mock("../api", () => ({
  api: jest.fn(() => ({
    get: jest.fn(),
  })),
}));

describe("WeatherApi", () => {
  let weatherApi: ReturnType<typeof WeatherApi>;
  let mockGet: jest.Mock;

  beforeEach(() => {
    weatherApi = WeatherApi(); // Criamos a instância correta
    mockGet = (api() as any).get; // Pegamos a função mockada corretamente
    jest.clearAllMocks();
  });

  it("should fetch current weather successfully", async () => {
    const mockData = { location: { name: "Cachoeirinha" }, current: { temp_c: 25 } };
    
    // 🛠 Garantimos que o mock retorna um objeto que contém a propriedade 'data'
    mockGet.mockResolvedValueOnce({ data: mockData });

    const result = await weatherApi.getCurrentWeather();
    
    // ✅ Verifica se a chamada foi feita corretamente
    expect(mockGet).toHaveBeenCalledWith(`current.json?q=cachoeirinha&key=${apiConfig.API_KEY}`);
    
    // ✅ Confirma se o resultado retornado é o esperado
    expect(result).toEqual(mockData);
  });

  it("should handle error in getCurrentWeather", async () => {
    const mockError = new Error("Network Error");
    mockGet.mockRejectedValueOnce(mockError);

    await expect(weatherApi.getCurrentWeather()).rejects.toThrow("Network Error");
  });

  it("should fetch forecast weather successfully", async () => {
    const mockData = { forecast: { forecastday: [{ day: { maxtemp_c: 30 } }] } };
    
    // 🛠 Corrigimos o retorno do mock para incluir 'data'
    mockGet.mockResolvedValueOnce({ data: mockData });

    const result = await weatherApi.getForecastWeather();
    
    expect(mockGet).toHaveBeenCalledWith(`forecast.json?q=cachoeirinha&days=14&key=${apiConfig.API_KEY}`);
    expect(result).toEqual({ data: mockData });
  });

  it("should handle error in getForecastWeather", async () => {
    const mockError = new Error("API Error");
    mockGet.mockRejectedValueOnce(mockError);

    await expect(weatherApi.getForecastWeather()).rejects.toThrow("API Error");
  });
});
