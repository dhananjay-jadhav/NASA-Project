import { describe, test, before } from "node:test";
import { equal, notStrictEqual } from "node:assert/strict";
import request from "supertest";
import app from "../../app.ts";
import { loadPlanetsData } from "../../models/planets.model.ts";
import { deepStrictEqual } from "node:assert";

before(async () => await loadPlanetsData());

describe("GET Launches API", () => {
  test("GET /launches returns 200", async () => {
    const response = await request(app).get("/launches");
    equal(response.status, 200);
  });
});

describe("POST Launches API", () => {
  test("POST /launches returns 201", async () => {
    const input = {
      mission: "X-MAN1001",
      rocket: "ROCKET_1001",
      launchDate: "December 1, 2030",
      target: "Kepler-1410 b",
    };
    const response = await request(app)
      .post("/launches")
      .send(input)
      .expect("Content-Type", /json/)
      .expect(201);

    equal(response.ok, true);
    const { mission, rocket, target, launchDate } = response.body;

    deepStrictEqual(
      { mission, rocket, target, launchDate: new Date(launchDate).valueOf() },
      {
        ...input,
        launchDate: new Date(input.launchDate).valueOf(),
      },
    );
  });

  test('POST /launches returns validation error "Missing required launch property"', async () => {
    const input = {
      mission: "X-MAN1001",
      // rocket: "ROCKET_1001",
      launchDate: "December 1, 2030",
      target: "Kepler-1410 b",
    };
    const response = await request(app)
      .post("/launches")
      .send(input)
      .expect("Content-Type", /json/)
      .expect(400);

    deepStrictEqual(response.body, {
      error: "Missing required launch property",
    });
  });

  test('POST /launches returns validation error "Invalid target"', async () => {
    const input = {
      mission: "X-MAN1001",
      rocket: "ROCKET_1001",
      launchDate: "December 1, 2030",
      target: "INVALID",
    };
    const response = await request(app)
      .post("/launches")
      .send(input)
      .expect("Content-Type", /json/)
      .expect(400);

    deepStrictEqual(response.body, {
      error: "Invalid target",
    });
  });

  test('POST /launches returns validation error "Invalid launchDate"', async () => {
    const input = {
      mission: "X-MAN1001",
      rocket: "ROCKET_1001",
      launchDate: "INVALID",
      target: "Kepler-1410 b",
    };
    const response = await request(app)
      .post("/launches")
      .send(input)
      .expect("Content-Type", /json/)
      .expect(400);

    deepStrictEqual(response.body, {
      error: "Invalid launchDate",
    });
  });
});

describe("DELETE Launches API", () => {
  test('POST /launches returns validation error "Invalid launchDate"', async () => {
      // To DO 
  });
});
