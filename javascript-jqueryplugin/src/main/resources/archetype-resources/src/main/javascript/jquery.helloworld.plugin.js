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
 * This simple jquery plugin just adds a new span-tag to each dom element found by the css-selector with the text
 * 'hello world'.
 *
 * This is some kind of skeleton and starting point for implementing your very own jquery plugins.
 * @fileOverview A simple jquery plugin example
 * @version ${project.version}
 */
(function($)
{
	var settings = {
				text : 'Hello World'
    };

    var methods = {
        /**
         * Some kind of constructor
         * @param options initial options
         */
        init : function(options)
		{
			if (options) {
                $.extend(settings, options);
            }
		},

        /**
         * Takes the selected elements and append a new SPAN tag to them with the text 'Hello World'
         * @param options change the text which will be inserted here
         * @return the selected and modified elements for jquery chaining feature
         */
        createHelloWorldSpanTags : function(options)
		{
			var localSettings = {};
            $.extend(localSettings, settings, options);

            return this.each(function() {

                // creating a span tag and append it to the input elements of the initially jquery selector
                $('<span>').appendTo($(this)).text(localSettings.text);

            });
		}
	};

    /**
     * Namespace method for this plugin
     * @param method
     * @return the selected and modified elements for jquery chaining feature
     */
    $.fn.helloWorld = function( method ) {

        // Method calling logic
        if ( methods[method] ) {
          return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'Method ' +  method + ' does not exist on jQuery.helloWorld' );
        }
    };

})(jQuery);