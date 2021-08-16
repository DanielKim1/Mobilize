import { render, waitFor, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import App from "./App";

const server = setupServer(
  rest.get(
    "https://api.mobilize.us/v1/organizations/1/events",
    (req, res, ctx) => {
      return res(
        ctx.json({
          data: [
            {
              timeslots: [
                {
                  end_date: 1513432800,
                  instructions: null,
                  start_date: 1513425600,
                  id: 1,
                  is_full: false,
                },
              ],
              created_by_volunteer_host: false,
              title: "MobilizeAmerica Canvass Training",
              event_campaign: null,
              contact: null,
              description:
                "Sharpen your canvass skills with our professional organizers",
              tags: [],
              sponsor: {
                is_primary_campaign: false,
                modified_date: 1628784834,
                district: "",
                race_type: null,
                is_independent: false,
                org_type: "CAMPAIGN",
                candidate_name: "",
                slug: "mobilize",
                state: "",
                created_date: 1511902789,
                name: "Mobilize",
                is_coordinated: false,
                event_feed_url: "https://www.mobilize.us/",
                id: 1,
              },
              address_visibility: "PUBLIC",
              accessibility_notes: null,
              high_priority: false,
              visibility: "PUBLIC",
              accessibility_status: null,
              location: null,
              instructions: null,
              modified_date: 1601664981,
              event_type: "MEETING",
              id: 1,
              virtual_action_url: null,
              is_virtual: true,
              created_date: 1511904228,
              summary:
                "Sharpen your canvass skills with our professional organizers",
              approval_status: "APPROVED",
              featured_image_url:
                "https://mobilizeamerica.imgix.net/static/event_images/2017/11/28/49be791b96ed6e157f4b83a83e07d5c5_photo.jpg",
              browser_url: "https://www.mobilize.us/mobilize/event/1/",
              timezone: "America/New_York",
            },
          ],
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders", async () => {
  render(<App />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  await waitFor(() => screen.getByText("MobilizeAmerica Canvass Training"));
  screen.getAllByRole("link").forEach((link) => {
    expect(link).toHaveAccessibleName();
  });
  screen.getAllByRole("button").forEach((button) => {
    expect(button).toHaveAccessibleName();
  });
});
