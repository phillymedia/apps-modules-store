# apps-modules-store
A store module shared between the SportsNow, Philly.com apps. This module is includes as an npm dependency in apps-main-feeds project.

## Purpose
Collecting fresh datasets can be expensive, so we store those datasets in a MongoDB for fast retrieval.

## Running the tests
1. Make sure mongodb is running on whichever machine is running the tests.

```sh
MONGO_DB_PASS=YOUR_PASSWORD npm run test
```