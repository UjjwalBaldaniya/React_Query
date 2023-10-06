import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const postData = (value) => {
  return axios.post(`http://localhost:4000/superheros`, value);
};

export const useSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(postData, {
    onSuccess: () => {
      queryClient.invalidateQueries("super");
    },
  });
};
