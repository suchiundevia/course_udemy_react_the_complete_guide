import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import MongoClient from "mongodb";
import React from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://thumbs.dreamstime.com/b/auckland-new-zealand-aug-auckland-north-island-new-zealand-august-sunset-view-city-buildings-auckland-new-zealand-aug-201886726.jpg",
    address: "123 Auckland",
    description: "first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://www.swaindestinations.com/blog/wp-content/uploads/2014/06/2014-06-05-auckland.jpg",
    address: "123 Auckland",
    description: "second meetup",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Auckland_Skyline_as_seen_from_Devonport_20100128_3.jpg",
    address: "123 Auckland",
    description: "third meetup",
  },
];

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="react course"></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </React.Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const request = context.request;
//   const reposnse = context.response;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  let MongoClient = require("mongodb").MongoClient();
  const client = await MongoClient.connect(
    "mongodb+srv://such:udemy@2021@cluster0.whiju.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  const meetups = await meetupsCollections.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.title,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
