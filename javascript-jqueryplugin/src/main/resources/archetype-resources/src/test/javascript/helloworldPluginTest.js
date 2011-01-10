/*
 * Copyright 2010 akquinet
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

load(basePath + "jquery.helloworld.plugin.js");

function testHelloWorld() {

    // create some div tag
    $('<div>').appendTo('body');

    // selecting the div tag and run the jquery plugin on it
    $('div').helloWorld('createHelloWorldSpanTags');

    // assure that the right tags are created
    assertEquals('Hello World', $('div span').text());
}
