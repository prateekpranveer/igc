import { defineType } from "sanity";

export const userCredentialsType = defineType({
  name: "userCredentials",
  title: "User Credentials",
  type: "document",
  fields: [
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
  ],
});
