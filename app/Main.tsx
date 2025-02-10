import Link from "@/components/Link"
import Tag from "@/components/Tag"
import siteMetadata from "@/data/siteMetadata"
import { formatDate } from "pliny/utils/formatDate"
import NewsletterForm from "pliny/ui/NewsletterForm"
import GitHubCalendar from "react-github-calendar"
import SocialIcon from "@/components/social-icons"

const MAX_DISPLAY = 5

const today = new Date()

export default function Home({ posts }) {
  return (
    <>
      <div className="mb-10 mt-20">
        <h1 className="sm:leading-16 animate-gradient bg-[linear-gradient(to_right,theme(colors.green.300),#007BA7,theme(colors.blue.500),theme(colors.purple.300),#FF7F50,theme(colors.green.300))] bg-[length:150%_auto] bg-clip-text text-6xl font-bold leading-14 text-transparent sm:text-8xl ">
          Hello World!
        </h1>
      </div>
      <p className="text-xl">WOOJIN JEON / Yonsei University Mirae Campus Software</p>
      <p className="text-xl">전우진 / 연세대 미래캠 소프트웨어학부</p>  
      <div className="mt-4 flex space-x-5">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={10} />
        <SocialIcon kind="github" href={siteMetadata.github} size={10} />
        <SocialIcon kind="instagram" href={siteMetadata.instagram} size={10} />
      </div>
      <div className="my-5 mt-24 flex w-full items-center justify-center rounded-lg border-2 border-solid border-gray-100 dark:border-neutral-600">
        <div className="mx-10 my-7 overflow-x-auto">
          <GitHubCalendar
            username="geckobaem"
            year={today.getFullYear()}
            showWeekdayLabels
            theme={{
              dark: ["#1d232b", "#2c456b", "#3c649f", "#4779c4", "#83aff0"],
            }}
          />
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-neutral-600">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-neutral-600">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
