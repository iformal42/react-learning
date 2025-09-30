import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../services/apiCabins";
import toast from "react-hot-toast";

export function useDelete(params) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("done");

      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return mutate
}
