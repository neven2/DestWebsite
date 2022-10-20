import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  collection,
  getDocs,
  query,
  where,
  startAfter,
} from 'firebase/firestore'
import { db } from '../../api/firebase'
import { toast } from 'react-toastify'
import Spinner from '../Spinner/Spinner'
import ProductItem from '../ProductItem/ProductItem'

function Category() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [lastFetchedListing, setLastFetchedListing] = useState(null)
  const params = useParams()
  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, 'products')

        // Create a query
        const q = query(
          listingsRef,
          where('category', '==', params.categoryName),
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
  }, [params.categoryName])

  // Pagination / Load More
  const onFetchMoreListings = async () => {
    try {
      // Get reference
      const listingsRef = collection(db, 'products')
     
      // Create a query
      const q = query(
        listingsRef,
        where('category', '==', params.categoryName),
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
      toast.error('Could not fetch listings')
    }
  }

  return (
    <div className='category'>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <section className="container">
            <ul className="row">
              {listings.map((listing) => (
                <ProductItem
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              ))}
            </ul>
          </section>
        </>
      ) : (
        <>
        <p className="container">No listings for {params.categoryName}</p>
      </>
      )}
    </div>
  )
}

export default Category
