<script setup lang="ts"></script>

<template>
  <section id="results">
    <div class="results-container">
      <article class="results-grid-layout">
        <img class="avatar" src="/images/octocat.png" alt="profile" />
        <div class="user-credential">
          <div>
            <h2>The Octocat</h2>
            <small>@octocat</small>
          </div>
          <time
            class="joined-date"
            datetime="
            2011-01-25T00:00:00Z
          "
            >Joined 25 Jan 2011
          </time>
        </div>
        <p class="user-bio text-base">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div class="user-stats">
          <div>
            <h3 class="title-sm">Repos</h3>
            <p class="text-lg">8</p>
          </div>
          <div>
            <h3 class="title-sm">Followers</h3>
            <p class="text-lg">3938</p>
          </div>
          <div>
            <h3 class="title-sm">Following</h3>
            <p class="text-lg">9</p>
          </div>
        </div>
        <div class="user-link">
          <div class="flex-item">
            <div>
              <Icons iconSrc="location" />
              <p>San Francisco</p>
            </div>
            <div>
              <Icons iconSrc="website" />
              <a href="https://github.blog">github.blog</a>
            </div>
          </div>
          <div class="flex-item">
            <div>
              <Icons iconSrc="twitter" />
              <a href="#">Not Available</a>
            </div>
            <div>
              <Icons iconSrc="company" />
              <p>@github</p>
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

      @media (max-width: 64rem) {
        grid-row: 1 / 2;
      }
    }

    & .user-credential {
      margin-bottom: 20px;
      grid-column: 2 / -1;
      grid-row: 1 / 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 64rem) {
        flex-direction: column;
        align-items: flex-start;
      }

      & small {
        color: var(--clr-vivid-blue);
      }
    }

    & .user-bio {
      grid-column: 2 / -1;
      margin-bottom: 32px;

      @media (max-width: 64rem) {
        grid-column: 1 / -1;
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
        grid-column: 1 / -1;
      }

      & .title-sm {
        font-weight: normal;
      }

      & .text-lg {
        color: var(--heading-color);
      }

      & div {
        display: flex;
        flex-direction: column;
      }
    }

    & .user-link {
      grid-column: 2 / -1;
      display: flex;
      gap: 62px;

      @media (max-width: 64rem) {
        grid-column: 1 / -1;
      }

      @media (max-width: 40rem) {
        flex-direction: column;
        gap: 16px;
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
