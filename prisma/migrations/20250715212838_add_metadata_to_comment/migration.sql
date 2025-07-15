-- CreateTable
CREATE TABLE "ConfessionCommentLike" (
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ConfessionCommentLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfessionCommentComment" (
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ConfessionCommentComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ConfessionCommentLike" ADD CONSTRAINT "ConfessionCommentLike_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "ConfessionComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConfessionCommentComment" ADD CONSTRAINT "ConfessionCommentComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "ConfessionComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
