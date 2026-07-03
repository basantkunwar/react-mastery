import AppLayout from "@/Layouts/applayout"

export default function create() {
return (
    
<AppLayout> 

<div className="max-w-5xl mx-auto">
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
        {/* Header */}
        <div className="border-b border-gray-200 px-8 py-5">
            <h1 className="text-2xl font-bold text-gray-800">
                Add School Notice
            </h1>
            <p className="text-gray-500 mt-1">
                Create a new notice for students, teachers, or staff.
            </p>
        </div>

        {/* Form */}
        <form action="#" method="POST" className="p-8 space-y-6">

            {/* Title */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Notice Title
                </label>
                <input
                    type="text"
                    placeholder="Enter notice title"
                    name="title"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
            </div>

            {/* Category & Status */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" >
                        Category
                    </label>
                    <select name="category" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                        <option>Select Category</option>
                        <option>General</option>
                        <option>Holiday</option>
                        <option>Exam</option>
                        <option>Event</option>
                        <option>Admission</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Status
                    </label>
                    <select name="status" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                        <option>Published</option>
                        <option>Draft</option>
                    </select>
                </div>
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Publish Date
                    </label>
                    <input name="publish_date"
                        type="date"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Expiry Date
                    </label>
                    <input name="expiry_date"
                        type="date"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Notice Description
                </label>
                <textarea name="description"
                    rows="6"
                    placeholder="Write the notice here..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
            </div>

            {/* Attachment */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Attachment (Optional)
                </label>

                <input name="attachment"
                    type="file"
                    className="block w-full text-sm border border-gray-300 rounded-xl file:mr-4 file:px-4 file:py-3 file:border-0 file:bg-blue-600 file:text-white file:font-medium hover:file:bg-blue-700"
                />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">
                <button
                    type="reset"
                    className="px-6 py-3 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-100 transition"
                >
                    Reset
                </button>

                <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                    Save Notice
                </button>
            </div>

        </form>
    </div>
</div>

</AppLayout>
);
}