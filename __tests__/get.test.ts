import { get } from "choux/src/get";
import axios from 'axios';

describe("get", () => {
  it("makes an axios call", () => {
    const getSpy = jest.spyOn(axios, 'get').mockResolvedValue({});
    get({
      url: "http://example.com/api/v1/foo"
    });

    expect(getSpy).toHaveBeenCalledWith("http://example.com/api/v1/foo", {
      headers: {},
      params: undefined
    });
  });

  it("includes a query param when given", () => {
    const getSpy = jest.spyOn(axios, 'get').mockResolvedValue({});
    get({
      queryParams: {
        foo: "bar"
      },
      url: "http://example.com/api/v1/foo"
    });

    expect(getSpy).toHaveBeenCalledWith("http://example.com/api/v1/foo", expect.objectContaining({
      params: {
        foo: "bar"
      }
    }));
  });

  it("includes a bearer token when given", () => {
    const getSpy = jest.spyOn(axios, 'get').mockResolvedValue({});
    get({
      bearerToken: "abc-123",
      url: "http://example.com/api/v1/foo"
    });

    expect(getSpy).toHaveBeenCalledWith("http://example.com/api/v1/foo", expect.objectContaining({
      headers: {
        Authorization: "Bearer abc-123"
      }
    }));
  });
});
