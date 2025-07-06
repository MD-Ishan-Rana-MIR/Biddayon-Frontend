"use client";

import { useState, useEffect } from "react";
import {
    Search,
    Filter,
    MoreHorizontal,
    Edit,
    Trash2,
    UserPlus,
} from "lucide-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@radix-ui/react-dialog";
import { AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";

// Dummy users data for demonstration
const usersData = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "student",
        status: "active",
        joinedDate: "2023-01-01",
        lastActive: "2023-07-01",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "teacher",
        status: "inactive",
        joinedDate: "2023-02-15",
        lastActive: "2023-06-20",
    },
    // add more users as needed
];

export default function UserList() {
    const [users, setUsers] = useState(usersData);
    const [selectedRole, setSelectedRole] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [isOpen, setIsOpen] = useState(false);
    const [editUserId, setEditUserId] = useState<number | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updateUser, setUpdateUser] = useState<number | null>(null)

    // Controlled states for role and status during edit
    const [editRole, setEditRole] = useState<string>("");
    const [editStatus, setEditStatus] = useState<string>("");

    // Disable page scroll when modal is open
    useEffect(() => {
        if (isOpen || editUserId !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen, editUserId]);

    // Filter users based on role and status
    const filteredUsers = users.filter(
        (user) =>
            (selectedRole === "all" || user.role === selectedRole) &&
            (selectedStatus === "all" || user.status === selectedStatus)
    );

    // Get user object for editing
    const userToEdit = users.find((user) => user.id === editUserId);

    // When user to edit changes, initialize editRole and editStatus
    useEffect(() => {
        if (userToEdit) {
            setEditRole(userToEdit.role);
            setEditStatus(userToEdit.status);
            setIsEditing(false); // start in view mode
        }
    }, [userToEdit]);

    // Open edit modal for a user
    const openEditModal = (id: number) => {
        setEditUserId(id);
    };

    // Close edit modal
    const closeEditModal = () => {
        setEditUserId(null);
        setIsEditing(false);
    };

    // Handle form submit for editing user role and status
    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!editUserId) return;

        // Update users array with new role and status for edited user
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === editUserId
                    ? { ...user, role: editRole, status: editStatus }
                    : user
            )
        );

        closeEditModal();
    };

    // update user 


    useEffect(() => {
        if (updateUser !== null) {
            const user = users.find((u) => u.id === updateUser);
            if (user) {
                setEditRole(user.role);
                setEditStatus(user.status);
            }
        }
    }, [updateUser, users]);

    // Handle form submit to update user in the users array
    const handleUpdateSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (updateUser === null) return;

        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === updateUser ? { ...user, role: editRole, status: editStatus } : user
            )
        );

        setUpdateUser(null); // Close modal or editing state
    };

    const closeUpdateModal = () => setUpdateUser(null);

    const openUserUpdateModal = (id: number) => {
        setUpdateUser(id);
        console.log(id)
    }

    const userForUpdateModal = users.find((user) => user.id === updateUser);


    return (
        <div className="space-y-6 p-4">
            {/* Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Users Management
                </h1>

                <button
                    onClick={() => setIsOpen(true)}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                >
                    <UserPlus className="h-4 w-4" />
                    Add New User
                </button>
            </div>

            {/* Add User Modal (simplified) */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="fixed top-1/2 left-1/2 z-50 max-w-md w-[90vw] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-md bg-white p-6 shadow-lg dark:bg-gray-800 ">
                    <AlertDialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                        <DialogDescription>
                            Fill in the user details below to add a new user.
                        </DialogDescription>
                    </AlertDialogHeader>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            // TODO: Add new user logic here
                            setIsOpen(false);
                        }}
                        className="grid gap-4 py-4"
                    >
                        {/* Add user fields here (name, email, role, status) */}
                        <div className="grid grid-cols-1 gap-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-700 dark:text-white"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-700 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            <label
                                htmlFor="role"
                                className="text-sm font-medium text-gray-700 dark:text-white"
                            >
                                Role
                            </label>
                            <select
                                id="role"
                                name="role"
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            <label
                                htmlFor="status"
                                className="text-sm font-medium text-gray-700 dark:text-white"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                name="status"
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="suspended">Suspended</option>
                            </select>
                        </div>

                        <AlertDialogFooter>
                            <DialogClose asChild>
                                <button
                                    type="button"
                                    className="cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                            </DialogClose>
                            <button
                                type="submit"
                                className="cursor-pointer rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                            >
                                Add User
                            </button>
                        </AlertDialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Filters */}
            <div className="flex flex-col -z-0 gap-4 md:flex-row md:items-center md:justify-between">
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    // Add search functionality here if needed
                    />
                </div>
                <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Filter by:
                        </span>
                    </div>
                    <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                        <option value="all">All Roles</option>
                        <option value="student">Students</option>
                        <option value="teacher">Teachers</option>
                        <option value="admin">Admins</option>
                    </select>
                    <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="suspended">Suspended</option>
                    </select>
                </div>
            </div>

            {/* Users Table */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Joined Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Last Active
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                            {filteredUsers.map((user) => (
                                <tr
                                    key={user.id}
                                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        {user.name}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                        {user.email}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span
                                            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${user.role === "admin"
                                                ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                                                : user.role === "teacher"
                                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                                    : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                                }`}
                                        >
                                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                                        <span
                                            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${user.status === "active"
                                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                                : user.status === "inactive"
                                                    ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                                                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                                }`}
                                        >
                                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                        {user.joinedDate}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                        {user.lastActive}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button
                                                onClick={() => openUserUpdateModal(user?.id)}
                                                className="cursor-pointer rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="cursor-pointer rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                            <button onClick={() => openEditModal(user.id)} className="cursor-pointer rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Edit User Modal */}
            <Dialog
                open={editUserId !== null}
                onOpenChange={(open) => !open && closeEditModal()}
            >
                <DialogContent className="fixed top-1/2 left-1/2 max-w-md w-[90vw] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-md bg-white p-6 shadow-lg dark:bg-gray-800">
                    <DialogTitle>Edit User</DialogTitle>
                    <DialogDescription>Update the user information below.</DialogDescription>

                    {userToEdit ? (
                        !isEditing ? (
                            <div className="mt-4 space-y-4">
                                <p>
                                    <strong>Role:</strong> {userToEdit.role}
                                </p>
                                <p>
                                    <strong>Status:</strong> {userToEdit.status}
                                </p>
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleEditSubmit} className="mt-4 space-y-4">
                                <div>
                                    <label
                                        htmlFor="role"
                                        className="block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Role
                                    </label>
                                    <select
                                        id="role"
                                        value={editRole}
                                        onChange={(e) => setEditRole(e.target.value)}
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    >
                                        <option value="student">Student</option>
                                        <option value="teacher">Teacher</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="status"
                                        className="block text-sm font-medium text-gray-700 dark:text-white"
                                    >
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        value={editStatus}
                                        onChange={(e) => setEditStatus(e.target.value)}
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    >
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                        <option value="suspended">Suspended</option>
                                    </select>
                                </div>

                                <div className="flex justify-end space-x-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        )
                    ) : (
                        <p>User not found.</p>
                    )}
                </DialogContent>
            </Dialog>








            {/* update user */}


            <Dialog open={updateUser !== null} onOpenChange={(open) => !open && closeUpdateModal()}>
                <DialogContent className="fixed top-1/2 left-1/2 max-w-md w-[90vw] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-md bg-white p-6 shadow-lg dark:bg-gray-800">
                    <DialogTitle>Update User</DialogTitle>
                    <DialogDescription>Update the user's role and status below.</DialogDescription>

                    {userForUpdateModal ? (
                        <form onSubmit={handleUpdateSubmit} className="mt-4 space-y-4">
                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Role
                                </label>
                                <select
                                    id="role"
                                    value={editRole}
                                    onChange={(e) => setEditRole(e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    required
                                >
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Status
                                </label>
                                <select
                                    id="status"
                                    value={editStatus}
                                    onChange={(e) => setEditStatus(e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    required
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="suspended">Suspended</option>
                                </select>
                            </div>

                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={closeUpdateModal}
                                    className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    ) : (
                        <p className="text-red-500">User not found.</p>
                    )}
                </DialogContent>
            </Dialog>





        </div>
    );
}
