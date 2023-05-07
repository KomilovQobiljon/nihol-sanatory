import Home from '../components/Home';
import Report from '../components/Report';
import AllUsers from '../components/AllUsers';
import HalfTime from '../components/HalfTime';
import TimeUp from '../components/TimeUp';
import BuildingTypes from '../components/BuildingTypes';
import EmptyPlaces from '../components/EmptyPlaces';

export const paths = [
  {
    id: 0,
    path: "/",
    element: <Home/>
  },
  {
    id: 1,
    path: "/report",
    element: <Report/>
  },
  {
    id: 2,
    path: "/all-users",
    element: <AllUsers/>
  },
  {
    id: 3,
    path: "/half-time",
    element: <HalfTime/>
  },
  {
    id: 4,
    path: "/time-up",
    element: <TimeUp/>
  },
  {
    id: 5,
    path: "/empty-places",
    element: <EmptyPlaces/>
  },
  {
    id: 6,
    path: "/building-types",
    element: <BuildingTypes/>
  },
]