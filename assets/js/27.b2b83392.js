(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{367:function(t,s,n){"use strict";n.r(s);var e=n(42),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"mongodb-besci"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-besci"}},[t._v("#")]),t._v(" MongoDb Besci")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("-"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" show dbs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" get list of database\n-"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" use dbname "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" switch database\n-"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" show collections "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" get list of tables\n-"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.dropDatabase"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" remove database whitch you selected.\n-"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" use rohandb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" create database not show "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" list because there is no data so what"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s why not showing in list\n\n-> db => tell us whitch database we selected\n-> db.createCollection(\"posts\") => create table inside posts\n-> if any table inside show database in list\n->  one insert\ndb.posts.insert({\n\ttitle:'")]),t._v("post thirdupdate"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("', \n\tbody:'")]),t._v(" body of post one"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n\tcategory:'")]),t._v("News"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n\tlikes:4,\n\ttags:['")]),t._v("news"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("', '")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'],\n\tuser:{\n\t\tname: "rohan",\n\t\tstatus:"author"\n\t},\n\tdate:Date()\n})\n\n-> multiple insert\n\ndb.posts.insertMany([\n\t{\n\ttitle:\'')]),t._v("post mul one"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("', \n\tbody:'")]),t._v(" body of post one"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n\tcategory:'")]),t._v("News"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n\tlikes:4,\n\ttags:['")]),t._v("news"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("', '")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'],\n\tuser:{\n\t\tname: "rohan",\n\t\tstatus:"author"\n\t},\n\tdate:Date()\n\t},\n\t{\n\ttitle:\'')]),t._v("post mul two"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("', \n\tbody:'")]),t._v(" body of post one"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n\tcategory:'")]),t._v("News"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n\tlikes:4,\n\ttags:['")]),t._v("news"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("', '")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'],\n\tuser:{\n\t\tname: "rohan",\n\t\tstatus:"author"\n\t},\n\tdate:Date()\n\t}\n])\n\n\n// list of posts\n-> db.posts.find()\n-> db.posts.find().pretty()\n\n\n// only news category show same query where\ndb.posts.find({category:"news"})\ndb.posts.find({category:"news"}).pretty();\n\nsorts list 1 accending -1 deacending\ndb.posts.find().sort({title:1}).pretty()\n\n// count\ndb.posts.find({category:"news"}).count()\n\n\n// limit\ndb.posts.find().limit(2)\n\nforeach\ndb.posts.find().forEach(function(doc){print(\'')]),t._v("Blog Post: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+ doc.title)})\n\n\n// get first\ndb.posts.findOne({category:'")]),t._v("News"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'})\n\n\n// update all fields // first object title / id second object update, third if object not found create new \ntip this method remove all other fields if present inside\n\ndb.posts.update({title:\"post lastone\"}, {title:'")]),t._v("first post update last one"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("', body:'")]),t._v("new post updated"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\', date:Date()}, {upsert:true}) \n\n\n// only selected field replace and also insert new fields also if you create\ndb.posts.update({title:"post thirdupdate"}, \n{'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),t._v(":{title:'")]),t._v("first post update last one"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("', body:'")]),t._v("new post updated"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("', date:Date()}}) \n\n\n\n// increament inbuilt increament function "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$inc")]),t._v('\n\ndb.posts.update({_id: ObjectId("5e67cb2bfaa7aebeb4427a09"}, {'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$inc")]),t._v(':{likes:1}})\n\n// rename of fields likes fields name change into views\n\ndb.posts.update({_id: ObjectId("5e67cb2bfaa7aebeb4427a09")}, {'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rename")]),t._v(":{likes:'")]),t._v("views"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'}})\n\n// remove\n\ndb.posts.remove({_id: ObjectId("5e67cb2bfaa7aebeb4427a09")})\n\n\n// update comments fields in post\ndb.posts.update({_id : ObjectId("5e6743c6e50575b7ec38c4cf")}, \n{'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),t._v(':{\ncomments:[\n\t{\n\t  user:"rohan dhiman",\n\tbody:"first comment",\n\tdate:Date()\t\n\t},\n\t{\n\t  user:"rohan dhiman",\n\tbody:"second comment",\n\tdate:Date()\t\n\t}]\n}}) \n\n\n// find by user of comment authors\ndb.posts.find({comments:{'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$elemMatch")]),t._v(':{user:"rohan dhiman"}}})\n\n\n\n// title text search we have to use two query\nfirst create index after second qeury work\ndb.posts.createIndex({title:\'')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'})\ndb.posts.find({"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$text")]),t._v(":{"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$search")]),t._v(':"'),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("first p"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('"}})\n\n\n\ndb.posts.find({ views: { '),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gt")]),t._v(": 2 } })\ndb.posts.find({ views: { "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gte")]),t._v(": 7 } })\ndb.posts.find({ views: { "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lt")]),t._v(": 7 } })\ndb.posts.find({ views: { "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lte")]),t._v(": 7 } })\n\n\n\n\n\n\n\n\n\n\nShow Current Database\ndb\nCreate Or Switch Database\nuse acme\nDrop\ndb.dropDatabase()\nCreate Collection\ndb.createCollection('")]),t._v("posts"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("')\nShow Collections\nshow collections\nInsert Row\ndb.posts.insert({\n  title: '")]),t._v("Post One"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n  body: '")]),t._v("Body of post one"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n  category: '")]),t._v("News"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n  tags: ['")]),t._v("news"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("', '")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'],\n  user: {\n    name: '")]),t._v("John Doe"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n    status: '")]),t._v("author"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\n  },\n  date: Date()\n})\nInsert Multiple Rows\ndb.posts.insertMany([\n  {\n    title: '")]),t._v("Post Two"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n    body: '")]),t._v("Body of post two"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n    category: '")]),t._v("Technology"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n    date: Date()\n  },\n  {\n    title: '")]),t._v("Post Three"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n    body: '")]),t._v("Body of post three"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n    category: '")]),t._v("News"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n    date: Date()\n  },\n  {\n    title: '")]),t._v("Post Four"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n    body: '")]),t._v("Body of post three"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n    category: '")]),t._v("Entertainment"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n    date: Date()\n  }\n])\nGet All Rows\ndb.posts.find()\nGet All Rows Formatted\ndb.find().pretty()\nFind Rows\ndb.posts.find({ category: '")]),t._v("News"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' })\nSort Rows\n# asc\ndb.posts.find().sort({ title: 1 }).pretty()\n# desc\ndb.posts.find().sort({ title: -1 }).pretty()\nCount Rows\ndb.posts.find().count()\ndb.posts.find({ category: '")]),t._v("news"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' }).count()\nLimit Rows\ndb.posts.find().limit(2).pretty()\nChaining\ndb.posts.find().limit(2).sort({ title: 1 }).pretty()\nForeach\ndb.posts.find().forEach(function(doc) {\n  print(\"Blog Post: \" + doc.title)\n})\nFind One Row\ndb.posts.findOne({ category: '")]),t._v("News"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' })\nFind Specific Fields\ndb.posts.find({ title: '")]),t._v("Post One"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' }, {\n  title: 1,\n  author: 1\n})\nUpdate Row\ndb.posts.update({ title: '")]),t._v("Post Two"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' },\n{\n  title: '")]),t._v("Post Two"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n  body: '")]),t._v("New body "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" post "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n  date: Date()\n},\n{\n  upsert: true\n})\nUpdate Specific Field\ndb.posts.update({ title: '")]),t._v("Post Two"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' },\n{\n  "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),t._v(": {\n    body: '")]),t._v("Body "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" post "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n    category: '")]),t._v("Technology"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\n  }\n})\nIncrement Field ("),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$inc")]),t._v(")\ndb.posts.update({ title: '")]),t._v("Post Two"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' },\n{\n  "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$inc")]),t._v(": {\n    likes: 5\n  }\n})\nRename Field\ndb.posts.update({ title: '")]),t._v("Post Two"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' },\n{\n  "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rename")]),t._v(": {\n    likes: '")]),t._v("views"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\n  }\n})\nDelete Row\ndb.posts.remove({ title: '")]),t._v("Post Four"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' })\nSub-Documents\ndb.posts.update({ title: '")]),t._v("Post One"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' },\n{\n  "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),t._v(": {\n    comments: [\n      {\n        body: '")]),t._v("Comment One"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n        user: '")]),t._v("Mary Williams"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n        date: Date()\n      },\n      {\n        body: '")]),t._v("Comment Two"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n        user: '")]),t._v("Harry White"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("',\n        date: Date()\n      }\n    ]\n  }\n})\nFind By Element in Array ("),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$elemMatch")]),t._v(")\ndb.posts.find({\n  comments: {\n     "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$elemMatch")]),t._v(": {\n       user: '")]),t._v("Mary Williams"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\n       }\n    }\n  }\n)\nAdd Index\ndb.posts.createIndex({ title: '")]),t._v("text' "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nText Search\ndb.posts.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$text")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$search")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Post O"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nGreater "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Less Than\ndb.posts.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" views: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gt")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb.posts.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" views: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gte")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb.posts.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" views: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lt")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb.posts.find"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" views: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lte")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);