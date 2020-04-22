![powered by electricity](https://forthebadge.com/images/featured/featured-powered-by-electricity.svg)

# naics
naics is a library for dealing with North American Industry Classification System codes.

## Installation
```bash
npm install naics
```

## Usage
```javascript
const naics = require("naics");

const industry = naics.Industry.from("51121");

console.log(industry.title); // Software Publishers
```

## Classes

<dl>
<dt><a href="#Industry">Industry</a></dt>
<dd><p>An industry classification as defined in the 2017 NAICS Descriptions document</p>
</dd>
</dl>

<a name="Industry"></a>

## Industry
An industry classification as defined in the 2017 NAICS Descriptions document

**Kind**: global class  

* [Industry](#Industry)
    * [new Industry(code)](#new_Industry_new)
    * _instance_
        * [.code](#Industry+code) : <code>string</code>
        * [.title](#Industry+title) : <code>string</code>
        * [.description](#Industry+description) : <code>string</code>
        * [.category](#Industry+category) : <code>string</code>
        * [.descendants()](#Industry+descendants) ⇒ [<code>Array.&lt;Industry&gt;</code>](#Industry)
        * [.children()](#Industry+children) ⇒ [<code>Array.&lt;Industry&gt;</code>](#Industry)
        * [.parent()](#Industry+parent) ⇒ [<code>Industry</code>](#Industry) \| <code>undefined</code>
    * _static_
        * [.from(code)](#Industry.from) ⇒ [<code>Industry</code>](#Industry) \| <code>undefined</code>
        * [.codes()](#Industry.codes) ⇒ [<code>Iterable.&lt;Industry&gt;</code>](#Industry)
        * [.sectors()](#Industry.sectors) ⇒ [<code>Iterable.&lt;Industry&gt;</code>](#Industry)

<a name="new_Industry_new"></a>

### new Industry(code)

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | an NAICS code |

<a name="Industry+code"></a>

### industry.code : <code>string</code>
The 2-6 digit classification code

**Kind**: instance property of [<code>Industry</code>](#Industry)  
<a name="Industry+title"></a>

### industry.title : <code>string</code>
The title of the industry

**Kind**: instance property of [<code>Industry</code>](#Industry)  
<a name="Industry+description"></a>

### industry.description : <code>string</code>
The description of the industry

**Kind**: instance property of [<code>Industry</code>](#Industry)  
<a name="Industry+category"></a>

### industry.category : <code>string</code>
The 2-6 digit classification code

**Kind**: instance property of [<code>Industry</code>](#Industry)  
<a name="Industry+descendants"></a>

### industry.descendants() ⇒ [<code>Array.&lt;Industry&gt;</code>](#Industry)
Gets all descendants of the industry.

**Kind**: instance method of [<code>Industry</code>](#Industry)  
<a name="Industry+children"></a>

### industry.children() ⇒ [<code>Array.&lt;Industry&gt;</code>](#Industry)
Gets the children of the industry but not it's indirect descendants

**Kind**: instance method of [<code>Industry</code>](#Industry)  
<a name="Industry+parent"></a>

### industry.parent() ⇒ [<code>Industry</code>](#Industry) \| <code>undefined</code>
Gets the parent classification of the industry, or nothing if the industry
is a Sector.

**Kind**: instance method of [<code>Industry</code>](#Industry)  
<a name="Industry.from"></a>

### Industry.from(code) ⇒ [<code>Industry</code>](#Industry) \| <code>undefined</code>
Get an industry from its code

**Kind**: static method of [<code>Industry</code>](#Industry)  
**Returns**: [<code>Industry</code>](#Industry) \| <code>undefined</code> - an Industry representing the code provided.
If the code was not valid, undefined will be returned.  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | an industry code as defined in the 2017 NAICS |

<a name="Industry.codes"></a>

### Industry.codes() ⇒ [<code>Iterable.&lt;Industry&gt;</code>](#Industry)
Get an Iterable<Industry> of all codes

**Kind**: static method of [<code>Industry</code>](#Industry)  
**Returns**: [<code>Iterable.&lt;Industry&gt;</code>](#Industry) - an Iterable of all industries  
<a name="Industry.sectors"></a>

### Industry.sectors() ⇒ [<code>Iterable.&lt;Industry&gt;</code>](#Industry)
Get an Iterable<Industry> of all codes that represent sectors

**Kind**: static method of [<code>Industry</code>](#Industry)  
**Returns**: [<code>Iterable.&lt;Industry&gt;</code>](#Industry) - an Iterable of all sectors  
<a name="Category"></a>

## Category : <code>enum</code>
NAICS uses a six-digit coding system to identify particular industries and their placement in
this hierarchical structure of the classification system. The first two digits of the code designate
the sector, the third digit designates the subsector, the fourth digit designates the industry group,
the fifth digit designates the NAICS industry, and the sixth digit designates the national industry.
A zero as the sixth digit generally indicates that the NAICS industry and the U.S. industry are the
sames

**Kind**: global enum  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Sector | <code>number</code> | <code>2</code> | 
| Subsector | <code>number</code> | <code>3</code> | 
| IndustryGroup | <code>number</code> | <code>4</code> | 
| NAICSIndustry | <code>number</code> | <code>5</code> | 
| NationalIndustry | <code>number</code> | <code>6</code> | 


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)