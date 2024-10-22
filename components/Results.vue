<script setup lang="ts">
import type { User } from '~/lib/types'

// props
const props = defineProps<{
  user: User | null
  isLoading: boolean
}>()

// convert the date to a readable format
const date = computed(() => {
  if (!props.user) return ''
  return new Date(props.user.created_at).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
})

// remove the protocol and www from the URL
function trimUrl(url: string): string {
  return url.replace(/^(https?:\/\/)?(www\.)?/, '')
}

const trimmedBlogText = computed(() => {
  if (!props.user || !props.user.blog) return ''
  return trimUrl(props.user.blog)
})
</script>

<template>
  <section id="results">
    <div class="results-container">
      <article class="results-grid-layout">
        <img
          class="avatar"
          :src="user?.avatar_url"
          width="117"
          height="117"
          alt="profile"
        />
        <div class="user-credential">
          <div>
            <h2>{{ user?.name }}</h2>
            <small
              ><a :href="user?.html_url" target="_blank"
                >@{{ user?.login }}</a
              ></small
            >
          </div>
          <time
            v-if="user?.created_at"
            class="joined-date"
            :datetime="new Date(user.created_at).toISOString().split('T')[0]"
          >
            Joined {{ date }}
          </time>
        </div>
        <p v-if="user?.bio" class="user-bio text-base">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <NotAvailable v-else class="user-bio text-base"
          >This profile has no bio</NotAvailable
        >
        <div class="user-stats">
          <div>
            <h3 class="title-sm">Repos</h3>
            <p class="text-lg">{{ user?.public_repos }}</p>
          </div>
          <div>
            <h3 class="title-sm">Followers</h3>
            <p class="text-lg">{{ user?.followers }}</p>
          </div>
          <div>
            <h3 class="title-sm">Following</h3>
            <p class="text-lg">{{ user?.following }}</p>
          </div>
        </div>
        <div class="user-link">
          <div class="flex-item">
            <div>
              <Icons
                :class="{ 'not-available': !user?.location }"
                iconSrc="location"
              />
              <p v-if="user?.location">
                {{ user.location }}
              </p>
              <NotAvailable v-else />
            </div>
            <div>
              <Icons
                :class="{ 'not-available': !user?.blog }"
                iconSrc="website"
              />
              <a v-if="user?.blog" target="_blank" :href="user?.blog">{{
                trimmedBlogText
              }}</a>
              <NotAvailable v-else />
            </div>
          </div>
          <div class="flex-item">
            <div>
              <Icons
                :class="{ 'not-available': !user?.twitter_username }"
                iconSrc="twitter"
              />
              <a
                v-if="user?.twitter_username"
                :href="`https://x.com/${user?.twitter_username}`"
                >@{{ user?.twitter_username }}</a
              >
              <NotAvailable v-else />
            </div>
            <div>
              <Icons
                :class="{ 'not-available': !user?.company }"
                iconSrc="company"
              />
              <p v-if="user?.company">{{ user?.company }}</p>
              <NotAvailable v-else />
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.results-container {
  border-radius: 15px;
  background-color: var(--bg-container);
  padding: 48px;

  @media (max-width: 64rem) {
    padding: 40px;
  }

  @media (max-width: 40rem) {
    padding: 24px;
  }

  & .results-grid-layout {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 40rem) {
      column-gap: 20px;
    }

    & .avatar {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      border-radius: 50%;
      height: auto;

      @media (max-width: 64rem) {
        grid-row: 1 / 2;
      }

      @media (max-width: 40rem) {
        min-width: 80px;
        min-height: 80px;
      }
    }

    & .user-credential {
      align-self: flex-end;
      margin-bottom: 20px;
      grid-column: 2 / -1;
      gap: 6px;
      grid-row: 1 / 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 64rem) {
        flex-direction: column;
        align-items: flex-start;
      }

      @media (max-width: 40rem) {
        justify-content: flex-start;
        margin-left: 1rem;
      }

      @media (max-width: 25rem) {
        margin-left: 20px;
      }

      & h2 {
        @media (max-width: 40rem) {
          font-size: 1rem;
        }
      }

      & small {
        color: var(--clr-vivid-blue);
        font-size: 1rem;

        @media (max-width: 40rem) {
          font-size: 0.8125rem;
        }
      }

      & .joined-date {
        @media (max-width: 40rem) {
          font-size: 0.8125rem;
        }
      }
    }

    & .user-bio {
      grid-column: 2 / -1;
      margin-bottom: 32px;

      @media (max-width: 64rem) {
        margin-top: 24px;
        grid-column: 1 / -1;
      }

      @media (max-width: 40rem) {
        margin-bottom: 24px;
        font-size: 13px;
      }
    }

    & .user-stats {
      text-align: center;
      margin-bottom: 37px;
      border-radius: 10px;
      background-color: var(--bg-main);
      padding: 16px 32px;
      grid-column: 2 / -1;
      display: flex;
      justify-content: space-around;
      gap: 24px;

      @media (max-width: 64rem) {
        margin-bottom: 30px;
        grid-column: 1 / -1;
      }

      @media (max-width: 40rem) {
        margin-bottom: 24px;
        padding: 16px;
      }

      & .title-sm {
        font-weight: normal;

        @media (max-width: 40rem) {
          font-size: 0.8125rem;
        }
      }

      & .text-lg {
        color: var(--heading-color);

        @media (max-width: 40rem) {
          font-size: 1rem;
        }
      }

      & div {
        display: flex;
        flex-direction: column;
      }
    }

    & .user-link {
      grid-column: 2 / -1;
      display: flex;
      justify-content: space-around;
      gap: 1rem;

      @media (max-width: 64rem) {
        grid-column: 1 / -1;
      }

      @media (max-width: 40rem) {
        flex-direction: column;
        gap: 16px;
        font-size: 13px;
      }

      & .flex-item {
        display: flex;
        flex-direction: column;
        gap: 16px;

        & div {
          display: flex;
          align-items: center;
          gap: 16px;
        }
      }
    }
  }
}
</style>
