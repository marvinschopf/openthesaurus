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

import fetch from "node-fetch";

type OpenThesaurusTerm = {
	term: string;
	level?: string;
};

type OpenThesaurusSynSet = {
	id: number;
	categories: string[];
	terms: OpenThesaurusTerm[];
};

type OpenThesaurusSimilarTerm = {
	term: string;
	distance: number;
};

type OpenThesaurusOptions = {
	baseUrl?: string;
	similar?: boolean;
	baseform?: boolean;
};

type OpenThesaurusResponse = {
	warning?: string;
	copyright: string;
	license: string;
	source: string;
	synsets: OpenThesaurusSynSet[];
	similarTerms: OpenThesaurusSimilarTerm[];
	baseforms: string[];
};

async function asyncForEach(array: any[], callback: Function) {
	for (let index: number = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
}

export async function get(
	word: string,
	options?: OpenThesaurusOptions
): Promise<OpenThesaurusResponse> {
	const baseUrl: string =
		options != null &&
		options != undefined &&
		options.baseUrl != null &&
		options.baseUrl.length >= 1
			? options.baseUrl
			: "https://www.openthesaurus.de/synonyme/search";
	const returnSimilar: boolean =
		options != null &&
		options != undefined &&
		options.similar != null &&
		options.similar != true
			? false
			: true;

	const returnBaseforms: boolean =
		options != null &&
		options != undefined &&
		options.baseform != null &&
		options.baseform != true
			? false
			: true;
	const response: Response = await fetch(
		`${baseUrl}?format=application/json&similar=${returnSimilar.toString()}&baseform=${returnBaseforms.toString()}&q=${word}`
	);
	if (response.status != 200) {
		throw new Error(`Error: ${response.status} ${response.statusText}`);
	}
	const responseJson = await response.json();
	let synsets: OpenThesaurusSynSet[] = [];
	await asyncForEach(
		responseJson.synsets,
		async (synset: OpenThesaurusSynSet) => {
			synsets.push(synset);
		}
	);
	const responseObject: OpenThesaurusResponse = {
		copyright: responseJson.metaData.copyright,
		warning: responseJson.metaData.warning,
		license: responseJson.metaData.license,
		source: responseJson.metaData.source,
		synsets: synsets,
		similarTerms:
			responseJson.similarterms != null &&
			responseJson.similarterms != undefined &&
			responseJson.similarterms.length >= 1
				? responseJson.similarterms
				: [],
		baseforms:
			responseJson.baseforms != null &&
			responseJson.baseforms != undefined &&
			responseJson.baseforms.length >= 1
				? responseJson.baseforms
				: [],
	};
	return responseObject;
}
