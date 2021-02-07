/**
 * openthesaurus
 * Copyright (c) 2021 Marvin Schopf
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @copyright 2021 Marvin Schopf
 * @license Apache-2.0
 *
 */

import test from "ava";
import { randomBytes } from "crypto";
import { get } from "./../src/index";

test('"testen"', async function (t) {
	const response = await get("testen");
	t.is(response.synsets.length, 4);
	t.is(response.similarTerms.length, 5);
});

const randomString1: string = randomBytes(16).toString("hex");

test(`"${randomString1}"`, async function (t) {
	const response = await get(randomString1);
	t.is(response.synsets.length, 0);
	t.is(response.similarTerms.length, 0);
});
