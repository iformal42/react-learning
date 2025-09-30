import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCabin } from "../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const client = useQueryClient();

    


  const { mutate, isPending } = useMutation({
    mutationFn: addCabin,
    onSuccess: () => {
      toast.success("created cabin");
      client.invalidateQueries(
        {
          queryKey: ["cabin"]
        }
      )
    //   reset()
    },
    onError: () => toast.error("error")

  })
  return {mutate,isPending}
    
}