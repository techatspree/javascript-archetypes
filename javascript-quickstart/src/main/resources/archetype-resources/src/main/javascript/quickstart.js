/*
 * Copyright 2011 akquinet
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileOverview A simple Quickstart javascript example
 * @version ${project.version}
 */


/**
 * DE_AKQUINET_QUICKSTART package declaration.
 * This declaration makes sure to not erase the
 * current declaration. If the package does not
 * exist an empty object is created.
 * @default {}
 */
var DE_AKQUINET = DE_AKQUINET || {};

/**
 * A quickstart object
 * @namespace
 */
DE_AKQUINET.quickstart = function () {

    /**
     * Public interface
     * @scope DE_AKQUINET.quickstart
     */
    return {

        /**
         * Adds two numbers ...
         * @param number1 first number
         * @param number2 second number
         * @return the sum of the two numbers
         */
        addNumbers : function(number1, number2) {
            return number1 + number2;
        }
    };
} ();