"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Label,
  SearchField,
  Spinner,
} from "@heroui/react";
import { useState } from "react";

export function CarSearchFilter({ searchValue, setsearchValue }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const MIN_LENGTH = 3;
  const isInvalid = searchValue.length > 0 && searchValue.length < MIN_LENGTH;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.length < MIN_LENGTH) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Search submitted:", { query: searchValue });
      setsearchValue("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Form className="flex w-70 gap-4" onSubmit={handleSubmit}>
      <SearchField
        isRequired
        isInvalid={isInvalid}
        name="search"
        value={searchValue}
        onChange={setsearchValue}
      >
        <Label>Search products</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            className="w-full"
            placeholder="Search products..."
          />
          <SearchField.ClearButton />
        </SearchField.Group>
        {isInvalid ? (
          <FieldError>
            Search query must be at least {MIN_LENGTH} characters
          </FieldError>
        ) : (
          <Description>
            Enter at least {MIN_LENGTH} characters to search
          </Description>
        )}
      </SearchField>
      <Button
        className="w-full"
        isDisabled={searchValue.length < MIN_LENGTH}
        isPending={isSubmitting}
        type="submit"
        variant="primary"
      >
        {isSubmitting ? (
          <>
            <Spinner color="current" size="sm" />
            Searching...
          </>
        ) : (
          "Search"
        )}
      </Button>
    </Form>
  );
}
