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


describe('The quickstart object',function(){
    it('adds two numbers',function(){

        var number1 = 1;
        var number2 = 4;

        var result = DE_AKQUINET.quickstart.addNumbers(number1, number2);
        expect(result).toBe(5);
    });

});
