import axios from 'axios';

export const api = axios.create({
    baseURL: "https://hhsmmcacnjlginujjzgb.supabase.co/rest/v1",
    headers: {
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhoc21tY2FjbmpsZ2ludWpqemdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2NjM3NDYsImV4cCI6MjAzNDIzOTc0Nn0.AtmJcJFlMTPtGdO_00wwRiiieZ0ysvqA_8-NAjF7upc",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhoc21tY2FjbmpsZ2ludWpqemdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2NjM3NDYsImV4cCI6MjAzNDIzOTc0Nn0.AtmJcJFlMTPtGdO_00wwRiiieZ0ysvqA_8-NAjF7upc",
    };
})