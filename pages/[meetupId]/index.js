import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  const meetupData = props.meetupData;
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'M1',
        },
      },
      {
        params: {
          meetupId: 'M2',
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image: 'https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/16:9/w_2560%2Cc_limit/GettyImages-468366251.jpg',
        title: 'A First Meetup',
        address: 'Eiffel Tower - Paris, France',
        description: 'This is a first meetup'
      }
    }
  }
}

export default MeetupDetails;