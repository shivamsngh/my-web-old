/**
 * allJsonData is available on page load and is presnt at index.html
 */

function myBooks() {
    return allJsonData.books;
}

function newEventsAndConferences() {
    console.log(allJsonData)
    return allJsonData.events;
}

function myBucketList() {
    return allJsonData.listItems;
}