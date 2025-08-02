"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { Loader2, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const StudioUploadModal = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const create =useMutation(trpc.videos.create.mutationOptions({
    onSuccess:()=>{
      toast.success("Video created successfully");
      router.refresh();
    },
    onError:(error)=>{
      toast.error(error?.message);
      return;
    }
  }));
  
  return (
    <Button variant={"secondary"} onClick={()=> create?.mutate()} disabled={create?.isPending}>
        {create?.isPending ?<Loader2 className="animate-spin"/> :<PlusIcon/>}
        Create
    </Button>
  )
}

export default StudioUploadModal