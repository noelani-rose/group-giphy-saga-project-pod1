-- CREATE DATABASE giphy_search_favorites 

CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);


INSERT INTO "category" ("name")
VALUES ('funny'), ('cute'), ('nsfw'), ('mood');

CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR,
	"category" VARCHAR(50)
);

CREATE TABLE "favorites_category" (
	"id" SERIAL PRIMARY KEY,
	"cat_id" INT REFERENCES "category",
	"fav_id" INT REFERENCES "favorites"
);




-- SELECT * 
-- FROM "movies"
-- JOIN "movies_genres" ON "movie_id"."genre_id" = favorite.id 
-- JOIN category ON favorite_category.category_id = category.id 
