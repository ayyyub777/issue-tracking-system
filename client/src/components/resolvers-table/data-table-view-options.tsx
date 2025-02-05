// @ts-ignore

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon, PlusIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
} from "../ui/dropdown-menu";
import { useResolverFormModal } from "src/hooks/use-resolver-form-modal";

interface DataTableViewOptionsProps<TData> {
    table: Table<TData>;
}

export function DataTableViewOptions<TData>({
    table,
}: DataTableViewOptionsProps<TData>) {
    const resolverFormModal = useResolverFormModal();
    return (
        <>
            <Button
                className="hidden md:flex h-8"
                onClick={resolverFormModal.onOpen}
            >
                <PlusIcon className="mr-2 h-4 w-4" />
                Add resolver
            </Button>
            <div
                className="md:hidden absolute bottom-7 right-7 z-50"
                onClick={resolverFormModal.onOpen}
            >
                <div className="bg-primary text-primary-foreground h-12 w-12 flex justify-center items-center rounded-full shadow">
                    <PlusIcon className="h-6 w-6" />
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MixerHorizontalIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[150px]">
                    {table
                        .getAllColumns()
                        .filter(
                            (column) =>
                                typeof column.accessorFn !== "undefined" &&
                                column.getCanHide()
                        )
                        .map((column) => {
                            return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                        column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            );
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
