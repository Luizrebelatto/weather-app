import { WeatherApi } from "../api.service";
import { api } from "../api";
import apiConfig from "../api.config";

jest.mock("../api", () => ({
  api: jest.fn().mockReturnValue({
    get: jest.fn(),
  }),
}));

describe("WeatherApi", () => {
  let weatherApi: ReturnType<typeof WeatherApi>;
  let mockGet: jest.Mock;

  beforeEach(() => {
    weatherApi = WeatherApi();
    mockGet = (api() as any).get;
    jest.clearAllMocks();
  });

  it("should fetch current weather successfully", async () => {
    const mockData = { location: { name: "Cachoeirinha" }, current: { temp_c: 25 } };
    
    mockGet.mockResolvedValueOnce({ data: mockData });

    const result = await weatherApi.getCurrentWeather('cachoeirinha');
    
    expect(mockGet).toHaveBeenCalledWith(`current.json?q=cachoeirinha&key=${apiConfig.API_KEY}`);
    expect(result).toEqual(mockData);
  });

  it("should handle error in getCurrentWeather", async () => {
    const mockError = new Error("Network Error");
    mockGet.mockRejectedValueOnce(mockError);

    await expect(weatherApi.getCurrentWeather('cachoeirinha')).rejects.toThrow("Network Error");
  });

  it("should fetch forecast weather successfully", async () => {
    const mockData = { forecast: { forecastday: [{ day: { maxtemp_c: 30 } }] } };
    
    mockGet.mockResolvedValueOnce( mockData );

    const result = await weatherApi.getForecastWeather('cachoeirinha', 14);
    
    expect(mockGet).toHaveBeenCalledWith(`forecast.json?q=cachoeirinha&days=14&key=${apiConfig.API_KEY}`);
    expect(result).toEqual(mockData);
  });

  it("should handle error in getForecastWeather", async () => {
    const mockError = new Error("API Error");
    mockGet.mockRejectedValueOnce(mockError);

    await expect(weatherApi.getForecastWeather('cachoeirinha', 14)).rejects.toThrow("API Error");
  });
});
