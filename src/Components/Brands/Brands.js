import { useEffect, useState } from 'react'
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
import BrandItem from './BrandItem'
import './brands.css'
const Brands = () => {
 const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
const [lastFetchedListing, setLastFetchedListing] = useState(null)

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, 'brands')

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
      const listingsRef = collection(db, 'brands')

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
      toast.error('Could not fetch Brands')
    }
  }

  return (
    <section>
      <h2 className="margin-bottom">Popular Brandss</h2>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className='row'>
              {listings.map((listing) => (
                <BrandItem 
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              ))}
            </ul>
          </main>

          <br />
          <br />
          {lastFetchedListing && (
            <p className='loadMore' onClick={onFetchMoreListings}>
              Load More
            </p>
          )}
        </>
      ) : (
        <p>There are no current category</p>
      )}
    </section>
  )

}

export default Brands

  

