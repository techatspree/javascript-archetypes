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

describe('The Hello World jQuery Plugin',function(){

	// Remove any exisiting toastmessage container
	beforeEach(function() {

        // remove exisiting testing tags
        $('.test-container').remove();
        // create some div tag with a special css class
        $('<div>').addClass('test-container').appendTo('body');
    });

	//Specs
	describe('Saying Hello World',function() {
		it('creates a span-tag and inserts "Hello World"',function(){

            // call to our jquery plugin under test
            $('.test-container').helloWorld('createHelloWorldSpanTags');

            var actualInsertedText = $('.test-container span').text();
            expect(actualInsertedText).toEqual("Hello World");
		});
    });

});
