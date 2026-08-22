const apiUrl = process.env.API_URL;
console.log("API URL:", apiUrl);
let token;
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhODZjMTIzNGI5ZWJmYThmYjY0ZGU3YiIsImVtYWlsIjoidXNlckBnYW1pbC5jb20iLCJpYXQiOjE3ODcyMTYxNjUsImV4cCI6MTc4NzgyMDk2NX0.3E4VTgUe6SJVA6Tu59aUh-m9syfvxkaWf1nrPAMU3BA";

const event = {
  name: "Coding Bootcamp Team",
  description: "Discuss upcoming platform improvements and launch plans.",
  date: "2026-08-20T18:00:00.000Z",
  location: "Nairobi, Kenya",
  attendees: 55,
  thunmailUrl: "https://example.com/thumbnail.jpg",
};

async function fetchEvents() {
  try {
    const response = await fetch(
      `https://event-api-service-3jtj.onrender.com/api/v1/events`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();

    if (result.success) {
      console.log("Events fetched successfully:", result);
      return result.data;
    } else {
      throw new Error(`Error fetching events: ${result.message}`);
    }
  } catch (err) {
    console.error("Error fetching events:", err.message);
    throw new Error(`Error fetching events: ${err.message}`);
  }
}

async function createEvent(event) {
  try {
    const response = await fetch(
      `https://event-api-service-3jtj.onrender.com/api/v1/events`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();

    if (result.success) {
      console.log("Events created successfully:", result);
      return result.data;
    } else {
      throw new Error(`Error creating event: ${result.message}`);
    }
  } catch (err) {
    console.error("Error creating event:", err.message);
    throw new Error(`Error creating event: ${err.message}`);
  }
}

async function login(data) {
  try {
    const response = await fetch(
      `https://event-api-service-3jtj.onrender.com/api/v1/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();

    if (result.success) {
      console.log("Events created successfully:", result);
      return result.data;
    } else {
      throw new Error(`Error loggin in: ${result.message}`);
    }
  } catch (err) {
    console.error("Error fetching events:", err.message);
    throw new Error(`Error fetching events: ${err.message}`);
  }
}

const userCredentials = {
  email: "user@gamil.com",
  password: "1234567890",
};

// login(userCredentials);
createEvent(event)
// fetchEvents()
