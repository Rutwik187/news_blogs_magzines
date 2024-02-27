import { useQuery } from '@tanstack/react-query';
import { client } from '../client';

const useFetchCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => { // Use async here
      const fetchResult = await client.fetch(`*[_type == "category"]`);
      return fetchResult;
    }, 
  });
};


export default useFetchCategories;