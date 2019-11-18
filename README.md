# Hierarchical Search
The Hierarchical Search Bundle is a new Widget for searching features via a drop-down menu based on attributed values.
The menus will be filled automatically based on the attribute ID and the previous user selections.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_hierarchicalsearch/index.html?lang=de 

![Screenshot Sample App Hierarchical Search](https://github.com/conterra/mapapps-hierarchical-search/blob/master/screenshot.JPG)

## Installation Guide
**Requirement: map.apps 4.3.0**

1. First, you need to add the bundle "dn_hierarchicalsearch" to your app.
2. After that, add an AGSSearch store to your app that is initialized with the help of a layerId.
3. Set the useIn property of the tool to:
```
"useIn": [
    "selection"
],
```
4. Finally you can customize the content of the drop-down menus.

### Configurable Components of dn_hierarchicalsearch:
#### HierarchicalSearchWidgetFactory:
``` 
dn_hierarchicalsearch": {
   "HierarchicalSearchModel": {
        "storeId": "flurstuecke_store",
        "fields": [
            {
                "name": "gemarkung_",
                "label": "Gemarkung"
            },
            {
                "name": "flur_numme",
                "label": "Flur"
            },
            {
                "name": "flurstue_1",
                "label": "Flurstück"
            }
        ],
        "resultHandling": [
            "zoomToResult",
            "openPopup",
            "sendResultToResultCenter"
        ]
    }
}
```

##### Properties
HierarchicalSearchModel

 | Property                       | Type    | Possible Values                                     | Default            | Description                                                      |
 |--------------------------------|---------|-----------------------------------------------------|--------------------|------------------------------------------------------------------|
 | storeId                        | String  |                                                     |                    | The ID of your AGSSearch store                                   |
 | resultHandling                 | Array   | zoomToResult ; openPopup ; sendResultToResultCenter |                    | Array of result handling                                         |
 | fields                         | Array   |                                                     |                    | Array of search fields                                           |
 | field.name                     | String  |                                                     |                    | Name of the field                                                |
 | field.label                    | String  |                                                     |                    | Label for the drop down element                                  |

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
