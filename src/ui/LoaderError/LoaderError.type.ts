import { Status } from "../../redux/@types/enum"

export type LoaderErrorProps = {
	status: Status.pending | Status.rejected
}
