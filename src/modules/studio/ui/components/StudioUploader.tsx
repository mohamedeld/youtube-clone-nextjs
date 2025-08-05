
import MuxUploader, {
    MuxUploaderDrop,
    MuxUploaderFileSelect,
    MuxUploaderProgress,
    MuxUploaderStatus
} from "@mux/mux-uploader-react"

interface IProps{
    endpoint?:string | null;
    onSuccess:()=> void;
}
const StudioUploader = ({endpoint,onSuccess}:IProps) => {
  return (
    <div>
        <MuxUploader endpoint={endpoint}/>
    </div>
  )
}

export default StudioUploader