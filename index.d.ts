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
declare type OpenThesaurusTerm = {
    term: string;
    level?: string;
};
declare type OpenThesaurusSynSet = {
    id: number;
    categories: string[];
    terms: OpenThesaurusTerm[];
};
declare type OpenThesaurusSimilarTerm = {
    term: string;
    distance: number;
};
declare type OpenThesaurusOptions = {
    baseUrl?: string;
    similar?: boolean;
    baseform?: boolean;
};
declare type OpenThesaurusResponse = {
    warning?: string;
    copyright: string;
    license: string;
    source: string;
    synsets: OpenThesaurusSynSet[];
    similarTerms: OpenThesaurusSimilarTerm[];
    baseforms: string[];
};
export declare function get(word: string, options?: OpenThesaurusOptions): Promise<OpenThesaurusResponse>;
export {};
