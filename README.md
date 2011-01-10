javascript-archetypes
=====================

This projects provides several Maven archetypes for Javascript. Those archetypes allows to quickly bootstrap a Maven project
to develop an javascript application. The created projects automatically:

* running jsunit tests
* creating jsdocs
* running jslint
* creating compressed versions of all your js and css files


The javascript-quickstart archetype
-----------------------------------
The quickstart archetype creates a simple javascript application.

    mvn archetype:generate \
      -DarchetypeArtifactId=javascript-quickstart \
      -DarchetypeGroupId=de.akquinet.javascript.archetypes \
      -DarchetypeVersion=0.0.1-SNAPSHOT \
      -DgroupId=your.company \
      -DartifactId=javascript-quickstart-application


Credits
-------
The javascript-archetype-project is an open source project licensed under the Apache License 2.0.
It is founded by [akquinet](http://akquinet.de/en)

Technical Notes
---------------
* As the archetypes used the new archetype format, they don't work with the deprecated goal 'archetype:create'
