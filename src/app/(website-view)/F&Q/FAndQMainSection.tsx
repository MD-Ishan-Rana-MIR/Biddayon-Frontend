import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, MessageSquare } from "lucide-react";
import Link from "next/link";


const FAndQMainSection = () => {
    return (
        <div className="flex justify-between flex-col md:flex-row items-start md:gap-12 sm:gap-8 gap-8 md:px-7 px-4">
            <div className="md:w-[25%] w-full">
                <div className="shadow-md rounded-xl p-4 md:mb-5 mb-3 sm:mb-4">
                    <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                        ক্যাটাগরি
                    </h3>
                    <div className="space-y-2">
                        {
                            categories.map((category) =>
                            <a key={category?.id} href={`#${category?.id}`} className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                                <ChevronDown className="h-4 w-4 text-purple-600 mr-2" />
                                <span className="">{category?.name}</span>
                            </a>)
                        }
                    </div>
                </div>
                <div className="bg-gradient-to-r w-full from-purple-600 to-pink-600 rounded-xl shadow-md p-4 text-white">
                    <h3 className="text-xl font-bold mb-4">সাহায্য প্রয়োজন?</h3>
                    <p className="mb-4">আপনার প্রশ্নের উত্তর না পেলে আমাদের সাথে যোগাযোগ করুন</p>
                    <Link href={"/"} className="flex justify-center items-center gap-3 text-purple-600 py-3 bg-white rounded-md">
                        <MessageSquare size={15}/>
                        <span className="text-sm">লাইভ চ্যাট</span>
                    </Link>
                </div>
            </div>
            <div className="w-full md:space-y-7 sm:space-y-5 space-y-4">
                {
                    faqItems.map(category =>
                        <div key={category.category} id={category.category} className="scroll-mt-20">
                            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                                {categories.find((c) => c.id === category.category)?.name}
                            </h2>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {
                                    category.questions.map(item =>
                                        <AccordionItem value={item.id} key={item.id} className="border bg-white dark:bg-gray-950 rounded-lg shadow-sm px-4">
                                            <AccordionTrigger className="cursor-pointer hover:no-underline">
                                                <span className="text-left font-medium text-[17px]">{item.question}</span>
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-4 pt-0">
                                                <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    )
                                }
                            </Accordion>
                        </div>
                    )
                }
            </div>
        </div>
    );
};



type Categories = {
    id: string;
    name: string;
}
const categories: Categories[] = [
    { id: "general", name: "সাধারণ প্রশ্ন" },
    { id: "courses", name: "কোর্স সম্পর্কিত" },
    { id: "payment", name: "পেমেন্ট সম্পর্কিত" },
    { id: "certificate", name: "সার্টিফিকেট সম্পর্কিত" },
    { id: "account", name: "অ্যাকাউন্ট সম্পর্কিত" },
    { id: "technical", name: "টেকনিক্যাল সমস্যা" },
]

type FAQItems = {
    category: string;
    questions: {
        id: string;
        question: string;
        answer: string;
    }[]
}
const faqItems: FAQItems[] = [
    {
      category: "general",
      questions: [
        {
          id: "q1",
          question: "শিক্ষালয় কি?",
          answer:
            "শিক্ষালয় হল একটি অনলাইন শিক্ষা প্লাটফর্ম যা বাংলাদেশের সকল মানুষের জন্য উচ্চমানের শিক্ষা সহজলভ্য করার লক্ষ্যে কাজ করে যাচ্ছে। আমরা বিভিন্ন বিষয়ে কোর্স প্রদান করি যা আপনাকে আপনার ক্যারিয়ার গড়তে সাহায্য করবে।",
        },
        {
          id: "q2",
          question: "শিক্ষালয়ে কি কি বিষয়ে কোর্স আছে?",
          answer:
            "শিক্ষালয়ে বিভিন্ন বিষয়ে কোর্স আছে, যেমন: ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপ ডেভেলপমেন্ট, গ্রাফিক ডিজাইন, ডিজিটাল মার্কেটিং, ডাটা সায়েন্স, ফ্রিল্যান্সিং, ইংলিশ স্পিকিং, ইত্যাদি।",
        },
        {
          id: "q3",
          question: "শিক্ষালয়ে কোর্স করতে কি কি প্রয়োজন?",
          answer:
            "শিক্ষালয়ে কোর্স করতে আপনার প্রয়োজন হবে একটি কম্পিউটার বা স্মার্টফোন এবং ইন্টারনেট সংযোগ। কোর্সের উপর নির্ভর করে কিছু সফটওয়্যার বা টুলস প্রয়োজন হতে পারে, যা কোর্সের বিবরণে উল্লেখ করা থাকবে।",
        },
      ],
    },
    {
      category: "courses",
      questions: [
        {
          id: "q4",
          question: "কোর্সের মেয়াদ কত দিন?",
          answer:
            "কোর্সের মেয়াদ কোর্সের উপর নির্ভর করে ভিন্ন হয়। সাধারণত আমাদের কোর্সগুলো ১ মাস থেকে ৬ মাস পর্যন্ত হয়ে থাকে। প্রতিটি কোর্সের বিবরণে কোর্সের মেয়াদ উল্লেখ করা থাকে।",
        },
        {
          id: "q5",
          question: "কোর্স কি লাইভ নাকি রেকর্ডেড?",
          answer:
            "আমাদের কিছু কোর্স লাইভ এবং কিছু কোর্স রেকর্ডেড। লাইভ কোর্সে আপনি নির্দিষ্ট সময়ে অনলাইনে ক্লাসে যোগ দিতে পারবেন এবং শিক্ষকের সাথে সরাসরি যোগাযোগ করতে পারবেন। রেকর্ডেড কোর্সে আপনি যেকোনো সময় ভিডিও দেখতে পারবেন এবং প্রশ্ন করতে পারবেন।",
        },
        {
          id: "q6",
          question: "কোর্স কি লাইফটাইম অ্যাক্সেস?",
          answer: "হ্যাঁ, আমাদের সকল কোর্সে লাইফটাইম অ্যাক্সেস দেওয়া হয়। একবার কোর্স কিনলে আপনি যেকোনো সময় কোর্স দেখতে পারবেন।",
        },
      ],
    },
    {
      category: "payment",
      questions: [
        {
          id: "q7",
          question: "কোর্সের পেমেন্ট কিভাবে করব?",
          answer:
            "আমাদের কোর্সের পেমেন্ট বিভিন্ন মাধ্যমে করতে পারবেন। আমরা বিকাশ, নগদ, রকেট, মাস্টারকার্ড, ভিসা কার্ড ইত্যাদি পেমেন্ট মেথড সাপোর্ট করি। কোর্স কেনার সময় আপনি আপনার পছন্দের পেমেন্ট মেথড বেছে নিতে পারবেন।",
        },
        {
          id: "q8",
          question: "কোর্সের পেমেন্ট কি কিস্তিতে করা যাবে?",
          answer:
            "হ্যাঁ, আমাদের কিছু কোর্সের পেমেন্ট কিস্তিতে করা যায়। কিস্তির বিবরণ কোর্সের পেইজে উল্লেখ করা থাকে। সাধারণত ২-৩ কিস্তিতে পেমেন্ট করার সুযোগ থাকে।",
        },
        {
          id: "q9",
          question: "কোর্সের পেমেন্ট করার পর কি রিফান্ড করা যাবে?",
          answer:
            "হ্যাঁ, কোর্স শুরুর ৭ দিনের মধ্যে আপনি রিফান্ড চাইতে পারেন। তবে রিফান্ড পাওয়ার জন্য আপনাকে কোর্সের ১০% এর বেশি কন্টেন্ট দেখা যাবে না এবং আপনাকে রিফান্ডের কারণ জানাতে হবে। রিফান্ড প্রসেস সম্পর্কে বিস্তারিত জানতে আমাদের রিফান্ড পলিসি দেখুন।",
        },
      ],
    },
    {
      category: "certificate",
      questions: [
        {
          id: "q10",
          question: "কোর্স শেষে কি সার্টিফিকেট দেওয়া হয়?",
          answer:
            "হ্যাঁ, আমাদের সকল কোর্স শেষে সার্টিফিকেট দেওয়া হয়। কোর্স সম্পূর্ণ করার পর আপনি সার্টিফিকেট পাবেন। সার্টিফিকেটে আপনার নাম, কোর্সের নাম, সময়কাল ইত্যাদি থাকবে।",
        },
        {
          id: "q11",
          question: "সার্টিফিকেট কি ভেরিফাই করা যাবে?",
          answer:
            "হ্যাঁ, আমাদের সকল সার্টিফিকেট ভেরিফাই করা যায়। সার্টিফিকেটে একটি ইউনিক কোড থাকবে, যা দিয়ে আমাদের ওয়েবসাইটে গিয়ে সার্টিফিকেট ভেরিফাই করা যাবে।",
        },
        {
          id: "q12",
          question: "সার্টিফিকেট কি প্রিন্ট করা যাবে?",
          answer: "হ্যাঁ, আপনি সার্টিফিকেট প্রিন্ট করতে পারবেন। সার্টিফিকেট PDF ফরম্যাটে ডাউনলোড করতে পারবেন এবং প্রিন্ট করতে পারবেন।",
        },
      ],
    },
    {
      category: "account",
      questions: [
        {
          id: "q13",
          question: "অ্যাকাউন্ট কিভাবে তৈরি করব?",
          answer:
            "অ্যাকাউন্ট তৈরি করতে আমাদের ওয়েবসাইটে গিয়ে 'রেজিস্টার' বাটনে ক্লিক করুন। তারপর আপনার নাম, ইমেইল, ফোন নম্বর এবং পাসওয়ার্ড দিয়ে অ্যাকাউন্ট তৈরি করুন।",
        },
        {
          id: "q14",
          question: "পাসওয়ার্ড ভুলে গেলে কি করব?",
          answer:
            "পাসওয়ার্ড ভুলে গেলে লগইন পেইজে 'পাসওয়ার্ড ভুলে গেছেন?' অপশনে ক্লিক করুন। তারপর আপনার ইমেইল দিন, আমরা আপনাকে পাসওয়ার্ড রিসেট করার লিংক পাঠাব।",
        },
        {
          id: "q15",
          question: "প্রোফাইল কিভাবে আপডেট করব?",
          answer:
            "প্রোফাইল আপডেট করতে লগইন করার পর ডাশবোর্ডে গিয়ে 'প্রোফাইল' অপশনে ক্লিক করুন। সেখানে আপনি আপনার নাম, ফোটো, ফোন নম্বর ইত্যাদি আপডেট করতে পারবেন।",
        },
      ],
    },
    {
      category: "technical",
      questions: [
        {
          id: "q16",
          question: "ভিডিও দেখতে সমস্যা হলে কি করব?",
          answer:
            "ভিডিও দেখতে সমস্যা হলে প্রথমে আপনার ইন্টারনেট কানেকশন চেক করুন। তারপর ব্রাউজার রিফ্রেশ করুন। এরপরও সমস্যা হলে অন্য ব্রাউজার ব্যবহার করুন। সমস্যা থাকলে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।",
        },
        {
          id: "q17",
          question: "মোবাইলে কোর্স দেখা যাবে কি?",
          answer: "হ্যাঁ, আমাদের সকল কোর্স মোবাইলে দেখা যাবে। আপনি মোবাইল ব্রাউজার বা আমাদের মোবাইল অ্যাপ ব্যবহার করে কোর্স দেখতে পারবেন।",
        },
        {
          id: "q18",
          question: "কোর্স ভিডিও ডাউনলোড করা যাবে কি?",
          answer:
            "না, আমাদের কোর্স ভিডিও ডাউনলোড করা যাবে না। আপনি অনলাইনে ভিডিও দেখতে পারবেন। তবে কিছু কোর্সে স্টাডি ম্যাটেরিয়াল ডাউনলোড করার সুযোগ থাকে।",
        },
      ],
    },
]
export default FAndQMainSection;