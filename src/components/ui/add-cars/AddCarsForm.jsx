"use client";

import { authClient } from "@/lib/auth-client";
// import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Router from "next/router";
import { toast } from "react-toastify";

export default function AddCarsForm() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const form = Object.fromEntries(formData);
    const { name, email, PhotoUrl, password } = form;

    const { data, error } = await authClient.signUp.email({
      name, // required
      email, // required
      password, // required
      image: PhotoUrl,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Success! Loggin you in.......");
      Router.push("/");
    } else toast.error(error.message);
  };

  return (
    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
      {/* Car Name */}
      <TextField
        isRequired
        name="carName"
        type="text"
        validate={(value) => {
          if (value.length < 3) {
            return "Name must me at least 3 letters";
          }

          return null;
        }}
      >
        <Label>Car Name With Model</Label>
        <Input placeholder="Shopify Bashar V4" />
        <FieldError />
      </TextField>

      {/* Daily Rent Price*/}
      <TextField isRequired name="dailyRentPrice" type="number">
        <Label>Daily Rent Price</Label>
        <InputGroup>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.Input className="w-full" placeholder="$10/hr" min={`0`} />
          <InputGroup.Suffix>/hr</InputGroup.Suffix>
        </InputGroup>
        {/* <Input placeholder="$10/hr" />*/}
        <FieldError />
      </TextField>

      {/* Photo Url */}
      <TextField name="PhotoUrl" type="text">
        <Label>Photo Url</Label>
        <Input
          placeholder={`https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[a-z]/.test(value)) {
            return "Password must contain at least one lowercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit">
          {/* <Check />*/}
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
}
