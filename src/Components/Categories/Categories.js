import { useEffect, useState } from 'react'
import Slider from "react-slick";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import {
  collection,
  getDocs,
  query,
  where,
  limit,
  startAfter,
} from 'firebase/firestore'
import { db } from '../../api/firebase'
import { toast } from 'react-toastify'
import Spinner from '../../Components/Spinner/Spinner'
import CategoryItem from './CategoryItem'
import './Categories.css'
const Categories = () => {
 const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
const [lastFetchedListing, setLastFetchedListing] = useState(null)

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, 'category')

        // Create a query
        const q = query(
          listingsRef,
        )

        // Execute query
        const querySnap = await getDocs(q)

        const lastVisible = querySnap.docs[querySnap.docs.length - 1]
        setLastFetchedListing(lastVisible)

        const listings = []

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          })
        })

        setListings(listings)
        setLoading(false)
      } catch (error) {
        toast.error('Could not fetch listings')
      }
    }

    fetchListings()
  }, [])

  // Pagination / Load More
  const onFetchMoreListings = async () => {
    try {
      // Get reference
      const listingsRef = collection(db, 'category')

      // Create a query
      const q = query(
        listingsRef,
        startAfter(lastFetchedListing),
      )

      // Execute query
      const querySnap = await getDocs(q)

      const lastVisible = querySnap.docs[querySnap.docs.length - 1]
      setLastFetchedListing(lastVisible)

      const listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setListings((prevState) => [...prevState, ...listings])
      setLoading(false)
    } catch (error) {
        console.log(error);
      toast.error('Could not fetch Categories')
    }
  }
  const [activeCardItem, setActiveCardItemState] = useState(0);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="rightArrow">
        <button className=" p-0 h-8" onClick={onClick}>
          <AiOutlineRight/>
        </button>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="leftArrow">
        <button className="p-0 h-8" onClick={onClick}>
          <AiOutlineLeft/>
        </button>
      </div>
    );
  };

 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current) => setActiveCardItemState(current),
    };

  return (
    <section>
      <h2>Popular categories</h2>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <section className="pt-10">
            <Slider {...settings}>
              {listings.map((listing) => (
                <CategoryItem 
                className="col"
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              ))}
           </Slider>
          </section>      
        </>
      ) : (
        <p>There are no current category</p>
      )}
    </section>
  )

}

export default Categories

  

