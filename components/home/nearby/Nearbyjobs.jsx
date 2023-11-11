
import { View, Text, TouchableOpacity,ActivityIndicator} from 'react-native'
import { useRouter } from 'expo-router'
import {COLORS, SIZES} from '../../../constants'

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import dummyData from '../../../dummyData.json'

import useFetch from '../../../hooks/useFetch'

import styles from './nearbyjobs.style'

const Nearbyjobs = () => {

  const router = useRouter();
  const isLoading = false;
  const error = false;
  const data = dummyData
  //  const {data, isLoading, error} = useFetch('search', {
  //   query:'react developer',
  //   num_pages:1
  //  })

  return (
    <View>
       <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nearby job</Text>

          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show all</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size='large' colors={COLORS.primary}/>)
          : error ? (
            <Text>Something went wrong</Text>
          ) : (
            data?.map((job)=>(
              <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={()=> router.push(`/job-details/${job.job_id}`)}
              />
            ))
          )}
        </View>

    </View>
    </View>
  )
}

export default Nearbyjobs