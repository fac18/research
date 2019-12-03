
<font color="pink">

# SQL vs NoSQL

Reda - Nikke - Beth - Renata

</font>

---

![](https://i.imgur.com/GVJqv4X.png)

---

<font color="pink">

#### Main difference between SQL and NoSQL databases

![](https://i.imgur.com/ir5C9mc.png)

</font>

---

<font color="pink">

#### SQL and NoSQL databases: differences

<font size=5>

| SQL   |    NOSQL |
|---|---|
| Relational Databases (RDBMS)  | Non-relational or distributed database  |
| Table based  | Document based, key-value pairs, graph db or wide-column stores  |
| Structured Query Language (SQL)  | Unstructured Query Language varies from db to db|
| Must adhere to predefined schema - data integrity  | Dynamic schema - unstructured data |
| Powerful JOIN clause. Can obtain related data in multiple tables using a single SQL statement | No equivalent of JOIN |
| Vertically scalable(scaled up by increasing the horse-power of hardware eg. RAM, SSD, CPU) |  Horizontally scalable (scaled up by increasing the number of servers) |
|  Excellent support from vendors | May have to rely on community support   |
| ACID properties ( Atomicity, Consistency, Isolation and Durability)  | Brewers CAP theorem ( Consistency, Availability and Partition tolerance ) * |

*   [More about ACID and Brewers CAP Theorem](https://www.voltdb.com/blog/2015/10/22/disambiguating-acid-cap/)

</font>

---

## Pros and cons of SQL and NoSQL databases
![](https://i.imgur.com/SpFAc8a.png)

</font>

---

<font color="pink">

## Examples of the data structure of SQL and NoSQL databases

![](https://i.imgur.com/SocAHG7.png)

</font>

---

### Key-Value Store

<font color="pink" size=6>

* A **key** is a field name, an attribute, an identifier
* The content of the field is the **value**
* The data is usually a primitive data type (string, integer, array)
* eg. City : 'London'


![](https://i.imgur.com/V5zaG2s.png)


</font>

---

### Document-based

<font size=6 color="pink">

* A document database is a type of nonrelational database that is designed to store and query data as JSON-like documents. 
* They aren’t typically forced to have a schema and are therefore easy to modify.
* eg. catalogs, user profiles, and content management systems

![](https://i.imgur.com/F9CRrDo.png)

</font>

---

### Column-based
<font size=6 color="pink">

* Column-based = row key, column name, and cell timestamp. 
* You can add a column to specific rows without having to add them to every single record.

![](https://i.imgur.com/5PzNEry.png )


</font>

---

### Graph-based
<font size=6 color="pink">


* Structures are composed of vertices and edges (data and connections or entity and relationship).
* Graphs behave similarly to how people think—in specific relationships between discrete units of data. 

![](https://i.imgur.com/Mv3ntOf.jpg)

</font>

---

<font size=8 color="pink">

Relational databases do not inherently contain the idea of fixed relationships between records. Instead, related data is linked to each other by storing one record's unique key in another record's data. 

</font>
 
**In contrast, graph databases directly store the relationships between records.**



---

![](https://i.imgur.com/G6dEEPK.png)

---

<font color="pink">

## Examples of SQL databases:

MySQL, Oracle, PostgreSQL, and Microsoft SQL Server

![](https://i.imgur.com/Gm6pj8J.png)  ![](https://i.imgur.com/XyiUbXw.png)
![](https://i.imgur.com/zP8ToSq.png)  ![](https://i.imgur.com/JXvdrd8.png)

</font>

---

<font color="pink">

## Examples of NoSQL databases:

MongoDB, BigTable, Redis, RavenDB Cassandra, HBase, Neo4j and CouchDB.

![](https://i.imgur.com/EerFxxQ.png) ![](https://i.imgur.com/2DnaxjK.png) ![](https://i.imgur.com/B6g2GmG.png)
![](https://i.imgur.com/mEtEIvJ.png) ![](https://i.imgur.com/idVzoiD.png) ![](https://i.imgur.com/Owjq2bM.png ) ![](https://i.imgur.com/v6xGqVZ.png )

</font>


---

## Examples of queries for SQL and NoSQL databases

---

<font color="pink" size="6">

SQL <font color="white">```SELECT * FROM userdetails;```</font>
MongoDB(NoSQL) <font color="aqua">```db.userdetails.find();```</font>


Selecting with a condition:
SQL <font color="white">```SELECT * FROM userdetails WHERE name = "importantperson";```</font>
MongoDB <font color="aqua">```db.userdetails.find({name:"importantperson"})```</font>

SQL <font color="white">```SELECT name FROM restaurants WHERE cuisine='Fish and chips';```</font>
MongoDB <font color="aqua">```db.restaurants.find({"cuisine": "Fish and chips"})```</font>

</font>

---

![](https://i.imgur.com/9DszGuL.png)

---

<font color="pink">

# THANK YOU!

</font>
