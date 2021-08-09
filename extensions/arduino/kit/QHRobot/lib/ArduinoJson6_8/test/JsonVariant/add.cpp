// ArduinoJson - arduinojson.org
// Copyright Benoit Blanchon 2014-2018
// MIT License

#include <ArduinoJson6_8.h>
#include <stdint.h>
#include <catch.hpp>

static const char* null = 0;

TEST_CASE("JsonVariant::add()") {
  DynamicJsonDocument doc(4096);
  JsonVariant var = doc.to<JsonVariant>();

  SECTION("No argument") {
    JsonVariant nested = var.add();

    REQUIRE(var.is<JsonArray>() == true);
    REQUIRE(nested.isNull() == true);
  }

  SECTION("integer") {
    var.add(42);

    REQUIRE(var.as<std::string>() == "[42]");
  }

  SECTION("const char*") {
    var.add("hello");

    REQUIRE(var.as<std::string>() == "[\"hello\"]");
  }

  SECTION("std::string") {
    var.add(std::string("hello"));

    REQUIRE(var.as<std::string>() == "[\"hello\"]");
  }
}
