import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "./Users";
import axios from "axios";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UserDetailsPage from "../pages/UserDetailsPage";
import AppRouter from "../router/AppRouter";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";

jest.mock("axios");

describe("USERS TEST", () => {
  let response = {};

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };

    axios.get.mockReturnValue(response);
  });

  test("test 3 users to be after mocked axios call", async () => {
    renderWithRouter(null, "/users");
    const users = await screen.findAllByTestId("user-item");
    screen.debug();
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });
  test("test redirect to details page", async () => {
    renderWithRouter(null, "/users");
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);

    userEvent.click(users[0]);

    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
