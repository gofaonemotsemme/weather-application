import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "@/env";
import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";

/**
 * This is the API handler for tRPC.
 * It handles all requests to /api/trpc.
 *
 * @see https://trpc.io/docs/nextjs
 */
// @see https://trpc.io/docs/adapters/nextjs
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          );
        }
      : undefined,
});
