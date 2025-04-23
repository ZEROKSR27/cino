import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { SearchIcon } from "lucide-react";

const SearchBox = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <SearchIcon size={26} cursor={"pointer"} />
                </DialogTrigger>

                <DialogContent>
                    <DialogTitle>
                        <form action="">
                            <input
                                type="text"
                                placeholder="search prudoct"
                                className="block w-full rounded-lg py-2 px-6 bg-gray-300 mt-4 outline-none"
                            />
                        </form>
                    </DialogTitle>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default SearchBox;
