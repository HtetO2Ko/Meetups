import MeetupList from '../components/meetups/MeetupList';

const DUMMRY_MEETUPS = [
  {
    id: 'M1',
    title: 'A First Meetup',
    image: 'https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/16:9/w_2560%2Cc_limit/GettyImages-468366251.jpg',
    address: 'Eiffel Tower - Paris, France',
    description: 'This is a first meetup'
  },
  {
    id: 'M2',
    title: 'A Second Meetup',
    image: 'https://blog.onevasco.com/wp-content/uploads/Beautiful-Maldives-View.jpg',
    address: 'Maldives',
    description: 'This is a second meetup'
  }
];

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMRY_MEETUPS,
    },
    revalidate: 1
  }
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMRY_MEETUPS,
//     },
//   }
// }

export default HomePage;